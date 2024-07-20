const FacebookSvg = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://www.facebook.com/mariage.bechar08';
      };
    return ( <>
    <button onClick={handleButtonClick} className="p-2 cursor-pointer border-main hover:bg-main duration-300 bg-light-main rounded-full" href="www.facebook.com">

    <svg fill="#141414" className="w-6 h-6 " viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058" fill-rule="evenodd"/>
</svg>
    </button>
    </> );
}
 
export default FacebookSvg;