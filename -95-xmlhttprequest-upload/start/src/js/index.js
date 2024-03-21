// Write your code here...
import Http from './Http';
const filesListContainer = document.querySelector('.filesList > table > tbody');
const progressBar = document.querySelector('#uploadProgress');
const fileInput = document.querySelector('input[name=fileToUpload]');
const uploadBtn = document.querySelector('#uploadFileBtn');
const http = new Http('http://localhost:8080/api');

const Row = (filename, size) => `<tr>
  <td>${filename}</td>
  <td>${size}Kb</td>
</tr>`;
