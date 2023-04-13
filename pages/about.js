import PostBody from "@/components/post-body";
import Container from "@/components/container";
import Hero from "@/components/hero";
import Image from "next/image";
import ProfileImage from "assets/img/progress-woman.svg";
import { Steps, Divider, Row, Col } from "antd";

export default function About() {
  return (
    <Container>
      <Hero title="About" subtitle="このサイトとプロフィールについて" />
      <PostBody>
        {/* ----- サイトについて ----- */}
        <div>
          <Divider orientation="left">サイトについて</Divider>
          <Row>
            <Col span={24}>
              <p>Next.js, Ant Design, BlogはmicroCMSで構成されています。</p>
              <p>AWS Amplifyでデプロイ、管理されています。</p>
            </Col>
          </Row>
          <br />
          <Divider orientation="left">プロフィール</Divider>
          <Row>
            <Col span={12}>
              <p>Kana 1995年生まれ</p>
              <p>趣味はイラスト、読書、ゲーム、ジョジョ2部、3部、4部</p>
              <p>
                Illustratorやクリスタでイラスト、自作壁紙を描いたりするのが好きです。
                2004年頃某ブラウザ育成ゲームに熱を注いでおり、自力でHTMLとイラレを調べ上げ、小学生のお小遣いでレンタルサーバーを借りて素材屋を運営していました。
                競う事があまり得意ではなく、協力する方が好きです。好奇心で新情報や技術を調べて自走したり、周囲に貢献する方が得意です。
                AWSSAAC-03,GCP,LPIC取得を目指して勉強中...
              </p>
            </Col>
            <Col span={12}>
              <Image src={ProfileImage} alt="" layout="responsive" priority />
            </Col>
          </Row>
          <br />
          <Divider orientation="left">保有資格</Divider>
          <Row>
            <Col span={24}>
              <p>
                Illustratorクリエイター能力認定試験 スタンダード 2022/08 取得
              </p>
              <p>AWS認定クラウドプラクティショナー 2023/03 取得</p>
              <p>ITパスポート 2023/04 取得</p>
            </Col>
          </Row>
        </div>
        <br />
        {/* ----- 経歴* ----- */}
        <Divider orientation="left">経歴</Divider>
        <Steps progressDot current={6} direction="vertical">
          <Steps title="2013/03" description="北海道芸術高等学校 卒業" />
          <Steps
            title="2013/04"
            description="ロシア極東連邦総合大学 ロシア語地域学科 入学。2017年にはウラジオストク本校へ留学"
          />
          <Steps
            title="2018/09"
            description="療養の為、ロシア極東連邦総合大学 ロシア語地域学科を中退"
          />
          <Steps
            title="2020/12"
            description="北海道ガス株式会社でコールセンター事務として入社"
          />
          <Steps
            title="2021/04-2021/08"
            description="WEB/ITの仕事に携わりたく、技術を習得するために職業訓練校WEBデザインクリエーター科 入学。
      職業訓練校にてHTML/CSS/Javascriptの勉強をきっかけに、React,Laravel,AWSでの簡単なアプリ制作を独学で勉強"
          />
          <Steps
            title="2021/09-2022/10"
            description="札幌市にあるサーバーサイド、バックエンドメインの会社へ入社。自社開発でSlack + IoT自動化、
        アプリアイコンのデザイン制作、NFTモバイルアプリゲームのデザイン企画、リクルートサイトの保守、
        ゲーム開発においては要件定義、DB構築、システム開発、テスト、レビューまで一貫して携わらせていただきました。"
          />
          <Steps
            title="2023/02~現在"
            description="IT業界に入ってから1年とまだ経験値が足り無い上、
          確実にキャリアアップを目指す為に、AWSSAAC-03,GCP,LPIC取得に向けた勉強を進めております。"
          />
        </Steps>
        <Divider />
      </PostBody>
    </Container>
  );
}
