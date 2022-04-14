function AppBorder({ children }) {
  return (
    <div className='col-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7 main-app'>
      <div className='banner border-0 rounded pt-5 pb-3 px-3 d-flex flex-column'>
        {children}
      </div>
    </div>
  );
}
export default AppBorder;
