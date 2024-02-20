/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(){

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let domainGenerator = function(pronoun, adj, noun) {
  let dominios = [];
  for (let x = 0; x < pronoun.length; x++) {
    for (let y = 0; y < adj.length; y++) {
      for (let z = 0; z < noun.length; z++) {
        dominios.push(pronoun[x] + adj[y] + noun[z] + ".com");
      }
    }
  }
  console.log(dominios);
};
domainGenerator(pronoun, adj, noun);
}