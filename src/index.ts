import { app } from "/src/main.ts";
import { serve } from "std/http/server.ts";

serve(app.fetch);
