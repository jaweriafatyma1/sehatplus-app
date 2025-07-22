export default function Home(){
    return(
        
      <>
        <div className="w-[360px] h-[799px] flex items-center justify-center bg-gray-100">
          <div className="flex flex-col space-y-4 w-[200px] ">
            <button className="bg-red-100 text-white font-bold px-2 py-2 rounded">
              Call an ambulance
            </button>

            <button className="bg-red-500 hover:bg-white text-white font-bold px-2 py-2 rounded">
              Ring the Hospital
            </button>
          </div>
        </div>
        
      </>
      
    );
}