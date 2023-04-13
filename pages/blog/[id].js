import { client } from "libs/api.js";
import { Button, Divider, Col, Row, Typography } from "antd";
import Image from "next/image";
import Hero from "@/components/hero";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const { Text, Link } = Typography;

export default function BlogId({ blog }) {
  return (
    <Container>
      <Hero title={blog.title} />
      <Link href="/blog">
        <span>
          <Button icon={<FontAwesomeIcon icon={faArrowLeft} />}>
            Back to Blog
          </Button>
        </span>
      </Link>
      <Divider />
      <PostBody>
        <article>
          <Row>
            <Col span={12}>
              <Text type="secondary">
                Posted at {new Date(blog.publishedAt).toLocaleDateString()}
              </Text>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${blog.content}`,
                }}
              />
            </Col>
            <Col span={12}>
              <Image
                alt="Eyecatch"
                src={blog.eyecatch.url}
                layout="responsive"
                width={300}
                height={300}
              />
            </Col>
          </Row>
        </article>
      </PostBody>
    </Container>
  );
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
