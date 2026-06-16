import GautamHome from "@/components/gautam-home";
import { getContentSnapshot } from "@/lib/cms";

export default async function Home() {
  const snapshot = await getContentSnapshot();

  return <GautamHome snapshot={snapshot} />;
}
