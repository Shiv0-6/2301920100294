import axios from "axios";
import { LOG_API } from "./constants";
import { Level, PackageName, Stack } from "./types";

let accessToken = "";

export function setToken(token: string) {
  accessToken = token;
  }

  export async function Log(
    stack: Stack,
      level: Level,
        packageName: PackageName,
          message: string
          ) {
            try {
                const response = await axios.post(
                      LOG_API,
                            {
                                    stack,
                                            level,
                                                    package: packageName,
                                                            message
                                                                  },
                                                                        {
                                                                                headers: {
                                                                                          Authorization: `Bearer ${accessToken}`
                                                                                                  }
                                                                                                        }
                                                                                                            );

                                                                                                                return response.data;
                                                                                                                  } catch (error: any) {
                                                                                                                      throw new Error(
                                                                                                                            error?.response?.data?.message ||
                                                                                                                                  "Logging API failed"
                                                                                                                                      );
                                                                                                                                        }
                                                                                                                                        }