import Image from "next/image";
import { configureServerSideGrowthBook } from "./growthbookServer";
import { GrowthBook } from "@growthbook/growthbook";
import { LandingA, LandingB } from "./landingComponent";


export default async function Home() {
  configureServerSideGrowthBook();

  // Create and initialize a GrowthBook instance
  const gb = new GrowthBook({
    apiHost: "https://cdn.growthbook.io",
    clientKey: "sdk-eur2L1Ktct6pUFD",
    //decryptionKey: process.env.NEXT_PUBLIC_GROWTHBOOK_DECRYPTION_KEY,
  });
  await gb.init({ timeout: 1000 });
  // Set targeting attributes for the user
  // TODO: get from cookies/headers/db
  await gb.setAttributes({
    id: 2,
    employee: true,
  });
  // Evaluate a feature flag
  const newTitle = gb.isOn("new-title");
  // Cleanup
  gb.destroy();

  return (
    <div className="size-full bg-black">
          {newTitle ?
            <LandingA /> :
            <LandingB />}
    </div>
  );
}
