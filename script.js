body {
  font-family: 'Poppins', sans-serif;
  background: #FFFFFF;
  color: #32205f;
  margin: 0;
}

header {
  background: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  justify-content: space-between;
}

header .logo {
  height: 40px;
  cursor: pointer;
}

.especialista-link {
  color: #32205f;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  background: #BEE41E;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.especialista-link:hover {
  background: #aacb1b;
}

.main-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 2rem auto;
  gap: 2rem;
  padding: 0 1rem;
}

.capim-rates {
  flex: 1;
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  max-width: 350px;
}

.capim-rates h2 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #32205f;
  margin-bottom: 1rem;
}

.capim-rates ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.capim-rates li {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 300px;
  max-width: 450px; /* largura aumentada */
  position: relative;
}

.calc-container {
  background: #B5EFF2;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 100%;
}

.calc-container h2 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #32205f;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

input[type="text"] {
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #32205f;
}

.parcelas-control {
  margin-bottom: 1rem;
}

#numParcelas {
  width: 100%;
}

button {
  padding: 0.8rem 1rem;
  background: #BEE41E;
  color: #32205f;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s ease;
  text-align: center;
}

button:hover {
  background: #aacb1b;
}

.alerta {
  color: red;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.result-block {
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.result-block h3 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #32205f;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.info-row strong {
  font-weight: 600;
}

.economia {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  color: #BEE41E; /* Verde limão */
}

/* Box promocional */
.promocao-box {
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.promocao-box h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #32205f;
}

.promocao-box ul {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.9rem;
}

.promocao-box li {
  margin-bottom: 0.3rem;
}

.advanced-trigger {
  text-align: center;
  margin-top: 1.5rem;
}

.advanced-trigger button {
  background: none;
  border: none;
  color: #32205f;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease;
}

.advanced-trigger button:hover {
  color: #555;
}

/* Sidebar Avançada */
.sidebar {
  position: fixed;
  top: 60px;
  right: -350px;
  width: 300px;
  height: calc(100vh - 60px);
  background: #B5EFF2;
  box-shadow: -4px 0 8px rgba(0,0,0,0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: right 0.3s ease;
  z-index: 999;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.sidebar-header h2 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #32205f;
}

.sidebar-header button {
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: #32205f;
}

.sidebar p {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.opcoes {
  flex: 1;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.contato-input {
  margin-bottom: 1rem;
  padding: 0.6rem;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #32205f;
}

.taxas-list {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1rem;
}

.taxa-row {
  background: #fff;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

.taxa-row-label {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #32205f;
}

.taxa-row-inputs {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
}

.taxa-input {
  flex: 0 0 60px;
  padding: 0.3rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: right;
  font-size: 0.85rem;
  color: #32205f;
  height: 1.8rem;
}

.taxa-slider {
  flex: 1;
}

.enviar-btn {
  margin-top: 1rem;
  width: 100%;
}

.overlay {
  position: fixed;
  top:0; left:0;
  width:100%; height:100%;
  background: rgba(0,0,0,0.2);
  display:none;
  z-index: 998;
}

.sidebar.open {
  right: 0;
}

footer {
  text-align: center;
  color: #666;
  padding: 2rem;
  font-size: 0.9rem;
}
