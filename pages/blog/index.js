import { client } from "libs/api.js";
import Image from "next/image";
import { Card, Col, Row, Typography } from "antd";
import Container from "@/components/container";
import Hero from "@/components/hero";

const { Text } = Typography;

export default function Blog({ blog }) {
  return (
    <div style={{ margin: "3em 0px" }}>
      <Container>
        <Hero
          title="Blog"
          subtitle="記事一覧 ※無料枠のCMSを使用しているので、重い点はご了承下さい"
        />
        <article>
          <Row gutter={16}>
            {blog.map((blog) => (
              <Col key={blog.id} span={8}>
                <a href={`/blog/${blog.id}`}>
                  <Card
                    href={`/blog/${blog.id}`}
                    title={blog.title}
                    // title={blog.title}
                    cover={
                      <Image
                        alt="Eyecatch"
                        src={blog.eyecatch.url}
                        layout="responsive"
                        width={500}
                        height={500}
                      />
                    }
                    hoverable
                    bordered={false}
                  >
                    <Text type="secondary">
                      Posted at{" "}
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </Text>
                    {/* <div
                    dangerouslySetInnerHTML={{
                      __html: `${blog.content}`,
                    }}
                  /> */}
                    <br />
                    <Text type="secondary">
                      Categories: {blog.category.name}
                    </Text>
                  </Card>
                </a>
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
