import type { NextPage } from "next";
import axios from "axios";
import { Video } from "../types";
import NoResults from "../components/NoResults";
import VideoCard from "../components/VideoCard";
import { BASE_URL } from "../utils";

interface Iprops {
  videos: Video[];
}

const Home = ({ videos }: Iprops) => {
  console.log(videos);
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={"no Videos"} />
      )}
    </div>
  );
};
export const getServerSideProps = async (params: string) => {
  const { data } = await axios.get(`${BASE_URL}/api/post`);
  console.log(data);
  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
