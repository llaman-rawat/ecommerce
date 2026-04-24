function Footer() {
  return (
    <div className="bg-gray-900 text-gray-400 mt-10 p-6 text-center border-t border-gray-800">

      <h2 className="text-xl text-white font-bold mb-2">MyShop</h2>

      <p>© 2026 All Rights Reserved</p>

      <div className="flex justify-center gap-6 mt-3">
        <span className="hover:text-white cursor-pointer">Privacy</span>
        <span className="hover:text-white cursor-pointer">Terms</span>
        <span className="hover:text-white cursor-pointer">Support</span>
      </div>

    </div>
  );
}

export default Footer;