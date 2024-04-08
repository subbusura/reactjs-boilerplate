import SideContainer from "./Side-Container";
import RightContainer from "./RIght-Container";
import LeftContainer from "./Left-container";

const Container = () => {
  return (
    <div className="h-full w-full p-2">
      <div className="flex w-full gap-2">
        <SideContainer />
        <div className=" h-auto w-full lg:w-[75%] flex-none md:flex space-y-3 md:space-y-0 gap-2">
          <LeftContainer>NUmaan</LeftContainer>{" "}
          <RightContainer>Nowmaan</RightContainer>
        </div>
      </div>
    </div>
  );
};

export default Container;
