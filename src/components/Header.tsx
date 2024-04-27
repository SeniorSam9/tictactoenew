export default function Header() {
  return (
    <header className=" flex flex-row h-10">
      <div
        className="w-[100%] h-[100%] flex flex-row justify-center mt-4"
        id="header-title"
      >
        <h2 className="max-[600px]:text-3xl max-[768px]:text-5xl min-[992px]:text-6xl text-slate-700">
          TicTacToe Upgraded
        </h2>
      </div>
    </header>
  );
}
