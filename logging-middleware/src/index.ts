import { Log, setToken } from "./logger";

async function main() {
  setToken("YOUR_ACCESS_TOKEN");

    await Log(
        "backend",
            "error",
                "handler",
                    "received string, expected bool"
                      );

                        await Log(
                            "frontend",
                                "info",
                                    "page",
                                        "Notifications page loaded"
                                          );
                                          }

                                          main();