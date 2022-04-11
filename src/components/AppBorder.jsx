function AppBorder({ children }) {
  return (
    <div className='col-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7 main-app'>
      <div className='card banner shadow border-0 py-5 px-3'>{children}</div>
    </div>
  );
}
export default AppBorder;
