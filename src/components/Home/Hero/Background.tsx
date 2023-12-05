import React, { memo, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  AmbientLight,
  Box2,
  CylinderGeometry,
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  OrthographicCamera,
  PointLight,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  Texture,
  TextureLoader,
  Vector2,
  WebGLRenderer,
} from 'three';
import faceBumpMapUrl from '!url-loader?limit=false!../../../images/hero/coin-face-bump-map.png';
import sideBumpMapUrl from '!url-loader?limit=false!../../../images/hero/coin-side-bump-map.png';
import { getNetworkIconSrc } from '../../../utils/network-utils';
import { theme } from '../../../theme';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const chains = Object.entries(theme.chains).map(([chainId, color]) => ({
  chainId,
  color: chainId === 'base' ? '#0052FF' : color,
  src: getNetworkIconSrc(chainId),
}));

class Coins {
  private camera: OrthographicCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private rendering: boolean = false;
  private frameRequest: number | undefined;
  private coins: Mesh<CylinderGeometry, MeshPhongMaterial[]>[];
  private velocities: Vector2[];
  private textureLoader: TextureLoader;
  private lastTime: DOMHighResTimeStamp | undefined;
  private faceBumpMap: Texture | undefined;
  private sideBumpMap: Texture | undefined;
  private coinGeometry: CylinderGeometry | undefined;
  private coinRadius: number = 5 / 100;
  private coinHeight: number = 1 / 100;
  private boundingBox: Box2;

  constructor(protected container: HTMLDivElement) {
    this.render = this.render.bind(this);
    this.resize = this.resize.bind(this);

    this.textureLoader = new TextureLoader();
    this.camera = this.createCamera();
    this.boundingBox = this.createBoundingBox();
    this.coins = this.createCoins();
    this.velocities = this.coins.map(() => new Vector2(this.randomSpeed(), this.randomSpeed()));
    this.scene = this.createScene();
    this.renderer = this.createRenderer();
    this.attachEvents();
  }

  private loadTexture(url: string) {
    const texture = this.textureLoader.load(url);
    texture.colorSpace = SRGBColorSpace;
    return texture;
  }

  private createCoins() {
    this.faceBumpMap = this.loadTexture(faceBumpMapUrl);
    this.sideBumpMap = this.loadTexture(sideBumpMapUrl);
    this.coinGeometry = new CylinderGeometry(this.coinRadius, this.coinRadius, this.coinHeight, 32);
    this.coinGeometry.rotateX(Math.PI / 2);
    this.coinGeometry.rotateZ(Math.PI / 2);

    return chains.map(({ chainId, color, src }) => this.createCoin(chainId, color, src));
  }

  private createCoin(chainId: string, color: string, src: string) {
    const textureMap = this.loadTexture(src);
    const oppositeFaceTextureMap = this.loadTexture(src);
    oppositeFaceTextureMap.flipY = false;
    oppositeFaceTextureMap.wrapS = RepeatWrapping;
    oppositeFaceTextureMap.repeat.x = -1;

    const side = new MeshPhongMaterial({
      color,
      specular: 0xffffff,
      shininess: 10,
      bumpMap: this.sideBumpMap!,
      bumpScale: 10,
    });

    const face = new MeshPhongMaterial({
      specular: 0xffffff,
      shininess: 10,
      bumpMap: this.faceBumpMap!,
      bumpScale: 10,
      map: textureMap,
    });

    const oppositeFace = new MeshPhongMaterial({
      specular: 0xffffff,
      shininess: 10,
      bumpMap: this.faceBumpMap!,
      bumpScale: 10,
      map: oppositeFaceTextureMap,
    });

    return new Mesh(this.coinGeometry!, [side, oppositeFace, face]);
  }

  private createScene() {
    const scene = new Scene();
    const ambientLight = new AmbientLight(0xffffff, 1);
    const directionalLight = new DirectionalLight(0xffffff, 5);
    const spotLight = new PointLight(0xffffff, 10);
    spotLight.position.set(3.5, 0, 50);

    this.coins.forEach((coin, i) => {
      const x = Math.random() * this.camera.right;
      const y = Math.random();
      coin.position.set(x, y, i);
      coin.rotation.y = Math.random() * Math.PI * 2;
    });

    scene.add(...this.coins);
    scene.add(ambientLight);
    scene.add(directionalLight);
    scene.add(spotLight);

    return scene;
  }

  private createRenderer() {
    const renderer = new WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    renderer.setClearColor('#141520', 0);
    this.container.appendChild(renderer.domElement);
    return renderer;
  }

  private createBoundingBox(): Box2 {
    return new Box2(
      new Vector2(this.coinRadius, this.coinRadius),
      new Vector2(this.camera.right - this.coinRadius, 1 - this.coinRadius)
    );
  }

  private createCamera() {
    const aspect = this.container.offsetWidth / this.container.offsetHeight;
    const camera = new OrthographicCamera(0, aspect, 0, 1);
    camera.position.z = 50;
    return camera;
  }

  public startRendering() {
    if (!this.rendering) {
      this.rendering = true;
      this.frameRequest = requestAnimationFrame(this.render);
    }
  }

  public stopRendering() {
    this.rendering = false;
    this.lastTime = undefined;
    if (this.frameRequest) {
      cancelAnimationFrame(this.frameRequest);
      this.frameRequest = undefined;
    }
  }

  private randomSpeed() {
    return Math.max(Math.random(), 0.1) / 2000;
  }

  private update(time: DOMHighResTimeStamp) {
    const delta = this.lastTime === undefined ? 0 : time - this.lastTime;
    this.lastTime = time;

    this.coins.forEach((coin, i) => {
      const velocity = this.velocities[i];

      coin.rotation.y += delta / 1000;
      coin.position.set(
        coin.position.x + velocity.x * delta,
        coin.position.y + velocity.y * delta,
        i
      );

      if (coin.position.y >= this.boundingBox.max.y) {
        coin.position.y = this.boundingBox.max.y;
        velocity.y = -this.randomSpeed();
      } else if (coin.position.y <= this.boundingBox.min.y) {
        coin.position.y = this.boundingBox.min.y;
        velocity.y = this.randomSpeed();
      }

      if (coin.position.x >= this.boundingBox.max.x) {
        coin.position.x = this.boundingBox.max.x;
        velocity.x = -this.randomSpeed();
      } else if (coin.position.x <= this.boundingBox.min.x) {
        coin.position.x = this.boundingBox.min.x;
        velocity.x = this.randomSpeed();
      }
    });
  }

  private render(time: DOMHighResTimeStamp) {
    if (!this.rendering) {
      return;
    }
    this.update(time);
    this.frameRequest = requestAnimationFrame(this.render);
    this.renderer.render(this.scene, this.camera);
  }

  private resize() {
    this.camera.right = this.container.offsetWidth / this.container.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    this.boundingBox.max.set(this.camera.right - this.coinRadius, 1 - this.coinRadius);
  }

  private attachEvents() {
    ['load', 'resize', 'orientationchange'].forEach(event => {
      window.addEventListener(event, this.resize);
    });
  }

  private detachEvents() {
    ['load', 'resize', 'orientationchange'].forEach(event => {
      window.removeEventListener(event, this.resize);
    });
  }

  private destroyRenderer() {
    this.stopRendering();
    this.renderer.domElement.remove();
    this.renderer.dispose();
  }

  public cleanup() {
    this.detachEvents();
    this.destroyRenderer();
  }
}

export const Background = memo(function Background() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coins = new Coins(containerRef.current!);
    coins.startRendering();
    return () => coins.cleanup();
  }, []);

  return <Container ref={containerRef} />;
});
