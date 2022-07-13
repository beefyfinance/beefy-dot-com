import React from 'react';
import { graphql } from 'gatsby';
import { Meta } from '../../components/Common/Meta';
import styled from '@emotion/styled';
import { theme } from '../../theme';

const Outer = styled.div`
  padding: ${theme.spacing(7.5)} 0;
`;

const PostContainer = styled.div`
  width: 752px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${theme.spacing(2)};
`;

const Post = styled.div``;

const PostTitle = styled.h1`
  ${theme.h1}
  margin: 0 0 ${theme.spacing()} 0;
`;

const PostDate = styled.div`
  color: ${theme.text.middle};
`;

const PostContent = styled.div`
  ${theme.bodyLg}
  color: ${theme.text.middle};
  margin: ${theme.spacing(4)} 0 0 0;

  a {
    color: ${theme.text.light};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${theme.h1}
    color: ${theme.text.light};
  }

  h1 {
    font-size: ${theme.h2.fontSize};
  }

  h2 {
    font-size: ${theme.h3.fontSize};
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: ${theme.h3.fontSize};
  }

  blockquote {
    padding: 0.5em 1em;
    border-inline-start: solid 3px ${theme.text.light};
  }

  ol,
  ul {
    padding-inline-start: ${theme.spacing(3)};
  }

  li {
    margin-bottom: 0.5em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    overflow-x: auto;
    word-break: keep-all;

    tr {
      th,
      td {
        padding: 8px;
        border-bottom: solid 1px ${theme.text.dark};
        vertical-align: top;
      }

      th {
        text-align: left;
      }
    }
  }
`;

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
      <Outer>
        <PostContainer>
          <PostTitle>{frontmatter?.title}</PostTitle>
          <PostDate>{frontmatter?.date}</PostDate>
          <PostContent dangerouslySetInnerHTML={{ __html: html }} />
        </PostContainer>
      </Outer>
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
