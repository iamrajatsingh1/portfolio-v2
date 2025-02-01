const Loader = (props) => {
  return <div id={props.isLoading ? 'preloader' : 'preloader-none'}></div>;
};

export default Loader;
