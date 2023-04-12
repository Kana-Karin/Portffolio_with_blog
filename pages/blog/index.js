import { client } from "libs/api.js";
import React from "react";
import { Card, Col, Row, Typography } from "antd";
import Container from "@/components/container";
import Hero from "@/components/hero";

const { Text } = Typography;

export default function Blog({ blog }) {
  return (
    <div style={{ margin: "3em 0px" }}>
      <Container>
        <Hero title="Blog" subtitle="記事一覧" />
        <article>
          <Row gutter={16}>
            {blog.map((blog) => (
              <Col key={blog.id} span={8}>
                <Card
                  href={`/blog/${blog.id}`}
                  // title={<a href={`/blog/${blog.id}`}>{blog.title}</a>}
                  title={blog.title}
                  bordered={false}
                >
                  <Text type="secondary">
                    posted at {new Date(blog.publishedAt).toLocaleDateString()}
                  </Text>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${blog.content}`,
                    }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </article>
      </Container>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
