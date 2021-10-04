import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";

export default function Video(props) {
  const { users, tracks } = props;
  // const [gridSpacing, setGridSpacing] = useState(12);
  const [noUsers, setNoUsers] = useState(1);

  useEffect(() => {
    // setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
    setNoUsers(users.length + 1);
  }, [users, tracks]);

  return (
    <div className="video-container">
      <div className="local-stream">
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      {/* <div className="remote-stream-container"> */}
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <div className="remote-stream">
                <AgoraVideoPlayer
                  videoTrack={user.videoTrack}
                  key={user.uid}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      {/* </div> */}
    </div>
  );
  // useEffect(() => {
  //   setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
  // }, [users, tracks]);

  // return (
  //   <Grid container style={{ height: "100%" }}>
  //     <Grid item xs={gridSpacing}>
  //       <AgoraVideoPlayer
  //         videoTrack={tracks[1]}
  //         style={{ height: "100%", width: "100%" }}
  //       />
  //     </Grid>
  //     {users.length > 0 &&
  //       users.map((user) => {
  //         if (user.videoTrack) {
  //           return (
  //             <Grid item xs={gridSpacing}>
  //               <AgoraVideoPlayer
  //                 videoTrack={user.videoTrack}
  //                 key={user.uid}
  //                 style={{ height: "100%", width: "100%" }}
  //               />
  //             </Grid>
  //           );
  //         } else {
  //           return null;
  //         }
  //       })}
  //   </Grid>
  // );
}
