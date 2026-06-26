export type Stack = "backend" | "frontend";

export type Level =
  | "debug"
    | "info"
      | "warn"
        | "error"
          | "fatal";

          export type PackageName =
            | "cache"
              | "controller"
                | "cron_job"
                  | "db"
                    | "domain"
                      | "handler"
                        | "repository"
                          | "route"
                            | "service"
                              | "api"
                                | "component"
                                  | "hook"
                                    | "page"
                                      | "state"
                                        | "auth"
                                          | "config"
                                            | "middleware"
                                              | "utils";