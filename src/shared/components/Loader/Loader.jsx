import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      wrapperClass="blocks-wrapper"
      colors={["#FFC107", "#FDF7F2", "#54ADFF", "#00C3AD", "#F43F5E"]}
    />
  );
};

export default Loader;
