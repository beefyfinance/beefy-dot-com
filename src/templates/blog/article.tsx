import React from 'react';
import { graphql } from 'gatsby';
import { Meta } from '../../components/Common/Meta';
import styled from '@emotion/styled';

const PostContainer = styled.div`
  width: 752px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 16px;
`;

const Post = styled.div``;

const PostTitle = styled.h1``;

const PostDate = styled.div``;

const PostContent = styled.div``;

type TemplateProps = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title?: string;
        date?: string;
        short_description?: string;
      };
    };
  };
};
export default function Template({ data }: TemplateProps) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const frontmatter = markdownRemark.frontmatter;
  const html = markdownRemark.html;

  return (
    <>
      <Meta title={frontmatter?.title} description={frontmatter?.short_description} />
      <PostContainer>
        <Post>
          <PostTitle>{frontmatter?.title}</PostTitle>
          <PostDate>{frontmatter?.date}</PostDate>
          <PostContent dangerouslySetInnerHTML={{ __html: html }} />
        </Post>
      </PostContainer>
    </>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        short_description
      }
    }
  }
`;
