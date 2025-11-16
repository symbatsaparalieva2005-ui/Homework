
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
:root {
  --background: #ffffff;
  --foreground: #171717;
}
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(to bottom, #e8f9f2, #d4f1ec);
  color: #2c3e50;
}

.header {
  background: linear-gradient(90deg, #4ecdc4, #2ecc71);
  color: white;
  text-align: center;
  padding: 25px 10px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

.header h1 {
  margin: 0;
  font-size: 2rem;
  letter-spacing: 1px;
}

.nav {
  margin-top: 10px;
}

.nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav a:hover {
  color: #fefad4;
}

.main {
  text-align: center;
  padding: 60px 20px;
}

.title {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #1a5e49;
}

.card {
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin: 0 auto;
  padding: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.image {
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  margin-bottom: 20px;
  transition: transform 0.4s ease;
}

.image:hover {
  transform: scale(1.05);
}

.text {
  font-size: 1rem;
  line-height: 1.6;
  color: #34495e;
  padding: 0 10px;
}

.footer {
  background: linear-gradient(90deg, #2ecc71, #4ecdc4);
  color: white;
  text-align: center;
  padding: 15px 0;
  margin-top: 60px;
  font-size: 0.9rem;
}

/* 📱 Адаптивность */
@media (max-width: 600px) {
  .title {
    font-size: 1.6rem;
  }

  .nav a {
    display: inline-block;
    margin: 5px 10px;
  }

  .image {
    max-width: 100%;
  }

  .card {
    padding: 15px;
  }
}

