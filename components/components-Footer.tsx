export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h4>Zara Kitchen</h4>
          <p>Good Food, Good Mood</p>
          <p className="text-sm mt-2">Serving delicious meals since 2020</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>
            <a href="/" className="hover:underline">
              Home
            </a>
          </p>
          <p>
            <a href="/menu" className="hover:underline">
              Menu
            </a>
          </p>
          <p>
            <a href="/about" className="hover:underline">
              About Us
            </a>
          </p>
          <p>
            <a href="/gallery" className="hover:underline">
              Gallery
            </a>
          </p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>
            <a href="tel:+233591599629" className="hover:underline">
              +233 591 599 629
            </a>
          </p>
          <p>
            <a href="mailto:orders@zarakitchen.online" className="hover:underline">
              orders@zarakitchen.online
            </a>
          </p>
          <p className="text-sm mt-2">Accra, Ghana</p>
        </div>

        <div>
          <h4>Hours</h4>
          <p>Mon - Fri</p>
          <p className="text-sm">8:00 AM - 10:00 PM</p>
          <p className="mt-2">Sat - Sun</p>
          <p className="text-sm">8:00 AM - 11:00 PM</p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <p>
            <a
              href="https://wa.me/233591599629"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp
            </a>
          </p>
          <p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Zara Kitchen. All rights reserved.</p>
      </div>
    </footer>
  );
}
