const Footer = () => {
  return (
    <footer className='p-8 flex flex-col  items-center gap-3 bg-lime-300 opacity-75'>
      <h2 className='footer-logo font-bold uppercase italic text-2xl'>
        COOKING<span className='text-rose-500'> KING</span>
      </h2>
      <p>&copy; {new Date().getFullYear()} COOKING KING. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
