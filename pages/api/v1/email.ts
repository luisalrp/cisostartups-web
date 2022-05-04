import { ghostAPIUrl } from "@lib/processEnv";

export default function (req: { body: { email: string; }; }, res: any) {
    console.log(req.body.email)
  }