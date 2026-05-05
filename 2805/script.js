const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFunção = document.querySelector('#m-função')
const sSalário = document.querySelector('#m-salario')
const btnSalvar = document.querySelector('#btn-salvar')

let itens
let id

function openModal(edit = false, index = 0) {
    modal.classList.add('active')

    modal.onclick = e => {
        if (e.target.ClassName.indexOf('modal-container') !== -1){
            modal.classList.remove('active')
        }
    }
    if (edit) {
        sNome.value = itens[index].nome
        sFunção.value = itens[index].função
        sSalário.value = itens[index].salário
        id = index
    }
    else{
        sNome.value = ''
        sFunção.value = ''
        sSalário.value= ''
    }
}
function editItem(index){
    openModal(true, index)
}
function deleteItem(index){
    itens.splice(index,  1)
    setItensBD()
    loadItens()
}
function insertItem(item, index) {
    let tr = document.createElement('tr')
    tr.innerHTML=`
    <td>${item.nome}</td>
    <td>${item.função}</td>
    <td>R$ ${item.salario}</td>
    <Td class = "acao">
    <button onclick="editItem(${index})'><i class ='bx bx-edit'>
    </i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx- trash'></i></button>
      </td>
    `
    tbody.appendChild(tr)
}

btnSalvar.onclick = e => { 
   
    if (sNome.value == '' || sFunção.value == '' || sSalário.value == '') 
  { 
      return 
    }
    e.preventDefault();
    if (id !== undefined) { 
        itens[id].nome = sNome.value 
        itens[id].funcao = sFunção.value 
        itens[id].salario = sSalário.value 
      } else { 
        itens.push({'nome': sNome.value, 'funcao': sFuncao.value, 
    'salario': sSalario.value}) 
      }
      setItensBD()
      modal.classList.remove('active') 
      loadItens() 
      id = undefined 
      function loadItens() { 
        itens = getItensBD()    
  tbody.innerHTML = '' 
  itens.forEach((item, index) => { 
    insertItem(item, index) 
  })  
      
}
const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? 
[] 
const setItensBD = () => localStorage.setItem('dbfunc', 
JSON.stringify(itens))
loadItens() 
}