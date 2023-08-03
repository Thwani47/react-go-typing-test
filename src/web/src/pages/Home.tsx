import Card from "../components/Card";
import Layout from "../components/Layout";
import StatsImage from "../assets/stats.jpg";
import TipsImage from "../assets/tips.jpg";
import TestImage from "../assets/take_test.jpg";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-4 py-4 items-center justify-center">
        <Card
          title="Take Test"
          content="Take a test to see how fast you can type"
          imageSrc={TestImage}
          actionButton={{
            text: "Take Test Now",
            action: () => console.log("Take Test Now")
          }}
        />
        <Card
          title="Statistics"
          content="View how you have performed in the past and how others have performed"
          imageSrc={StatsImage}
          actionButton={{
            text: "View Statistics",
            action: () => console.log("Take Test Now")
          }}
        />
        <Card
          title="Tips"
          content="View tips on how to improve your typing speed"
          imageSrc={TipsImage}
          actionButton={{
            text: "Learn More",
            action: () => console.log("Take Test Now")
          }}
        />
      </div>
    </Layout>
  );
}
