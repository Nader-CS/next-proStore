import LoadingSpinner from "@/components/common/LoadingSpinner";

const Loading = () => {
  return (
    <div className="h-screen justify-center items-center flex">
      <LoadingSpinner height={80} width={80} />
    </div>
  );
};
export default Loading;
