import Image from "next/image";
import Container from "@/components/container";
import Hero from "@/components/hero";
import uiSample1 from "assets/img/ui_sample1.jpeg";
import uiSample2 from "assets/img/ui_sample2.jpeg";
import uiSample3 from "assets/img/ui_sample3.jpeg";
import revenant from "assets/img/revenant.png";
import gund from "assets/img/gund.jpeg";
import lucarioAi from "assets/img/lucario_illustrator.jpeg";
import Link from "next/link";
import { Col, Row, Card, Divider, Typography } from "antd";

const { Text } = Typography;
const { Meta } = Card;

export default function Blog() {
  return (
    <Container>
      <Hero title="Portfolio" subtitle="制作物&イラスト&デザイン" />
      <div>
        <Text type="warning">※制作物に関してはGitHubへリンクする仕様です</Text>
        <br></br>
        <Text type="warning">
          ※デプロイ先を無料枠でお借りしている為、ストレージの都合上、全て載せる事は出来ません
        </Text>
      </div>
      <Divider orientation="left">制作物</Divider>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Title1" hoverable bordered={false}>
            Sample
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Title2" hoverable bordered={false}>
            Sample
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Title3" hoverable bordered={false}>
            Sample
          </Card>
        </Col>
      </Row>
      <Divider orientation="left">イラスト(趣味)&デザイン</Divider>
      <Row>
        <Col span={8}>
          <Card
            cover={
              <Image
                alt="example"
                src={uiSample1}
                layout="responsive"
                width={300}
                height={300}
                placeholder="blur"
              />
            }
          >
            <Meta title="NFTゲーム企画UI1" description="" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <Image
                alt="example"
                src={uiSample2}
                layout="responsive"
                width={300}
                height={300}
                placeholder="blur"
              />
            }
          >
            <Meta title="NFTアプリゲーム企画UI2" description="" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <Image
                alt="example"
                src={uiSample3}
                layout="responsive"
                width={300}
                height={300}
                placeholder="blur"
              />
            }
          >
            <Meta title="NFTアプリゲーム企画UI3" description="" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Card
            style={{ width: 200 }}
            cover={
              <Image
                alt="example"
                src={revenant}
                layout="responsive"
                width={300}
                height={300}
                placeholder="blur"
              />
            }
          >
            <Meta
              title=""
              description="某バトルロイヤルゲームの方です。一番好きなレジェンドです"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ width: 200 }}
            cover={
              <Image
                alt="example"
                src={gund}
                layout="responsive"
                width={300}
                height={300}
                placeholder="blur"
              />
            }
          >
            <Meta
              title=""
              description="シリーズは今作から初めて見ました。デザインがスタイリッシュでかっこよすぎて・・・"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ width: 200 }}
            cover={
              <Image
                alt="example"
                src={lucarioAi}
                layout="responsive"
                width={300}
                height={300}
                placeholder="blur"
              />
            }
          >
            <Meta
              title=""
              description="シリーズの中で一番好きなキャラです。永遠の相棒"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
