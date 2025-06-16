const Login = () => {
  return (
    <section className="container secLogin">
      <div className="loginDiv">
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="text" placeholder="Mot de passe" />
        <button type="submit">Connexion</button>
      </div>
    </section>
  );
};

export default Login;
