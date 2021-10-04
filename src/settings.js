import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "1a7f27fc6d20480b8fd32b1ed62eda4a";
const token =
  "0061a7f27fc6d20480b8fd32b1ed62eda4aIABpWEKk/t+7P9i7llJguMlWZ+lK0TOZKZ+X4nQMmTLRE2TNKL8AAAAAEABkg7/NB65aYQEAAQAHrlph";
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
