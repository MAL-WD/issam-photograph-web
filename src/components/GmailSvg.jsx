const GmailSvg = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://www.facebook.com/mariage.bechar08';
      };
    return ( <>
    <button onClick={handleButtonClick} className="p-4 cursor-pointer border-main hover:bg-main duration-300 bg-light-main rounded-full" href="www.facebook.com">

    <svg fill="#141414" className="w-10 h-10" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>gmail</title>
        <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z"></path>
        </svg>
    </button>
    </> );
}
 
export default GmailSvg;