import {UUID} from "../infrastructure/UIDGenerator";

export function generateDocs() {
  const info = [];
  
  info[0] = generateJavaDoc();
  info[1] = generateJSDoc();
  info[2] = generateReactDoc();
  
  return info;
}

export function generateReactDoc() {
  const doc = {uid: "react", title: "React", directory: "FRONTEND", pages: {}}
  const page1 = {uid: UUID(), title: "useEffect", blocks: {}}

  const pageBlock11 = {uid: UUID(), lang: "html", data: ""}
  pageBlock11.data = `<h2>Хук эффекта</h2>
  <p>
С помощью хука эффекта <code>useEffect</code> вы можете выполнять побочные эффекты из функционального компонента. Он выполняет ту же роль, что и <code>componentDidMount</code>, <code>componentDidUpdate</code> и <code>componentWillUnmount</code> в React-классах, объединив их в единый API. По умолчанию, React запускает эффекты после каждого рендера, включая первый рендер.
  
Хуки НЕ работают внутри классов, а используются вместо них.
  
К примеру, этот компонент устанавливает заголовок документа после того, как React обновляет DOM:
  </p>`;

  const pageBlock12 = {uid: UUID(), lang: "jsx", data: ""}
  pageBlock12.data = `import React, { useState, useEffect } from 'react';
  
function Example() {
  const [count, setCount] = useState(0);
  
  // По принципу componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    document.title = \`Вы нажали \${count} раз\`;
  });
  
  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}`

  page1.blocks = [pageBlock11, pageBlock12];

  const page2 = {uid: UUID(), title: "useIterator", blocks: {}}
  const pageBlock21 = {uid: UUID(), lang: "html", data: ""}
  pageBlock21.data = `<h2>Custom hook useIterator</h2>
  <p>Перебор значений:</p>`

  const pageBlock22 = {uid: UUID(), lang: "jsx", data: ""}
  pageBlock22.data = `import React from "react";
import { useIterator } from "../hooks";
  
export function RepoMenu({ repositories,  onSelect = f => f}) {
  const [{ name }, prev, next] = useIterator(
    repositories
  );

  useEffect(() => {
    if (name) onSelect(name);
  }, [name]);
    
  return (
    <div style={{ display: "flex" }}>
      <button onClick={prev}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
    </div>);
}`
  page2.blocks = [pageBlock21, pageBlock22];

  doc.pages = [page1, page2];
  return doc;
}

export function generateJavaDoc() {
  const doc = {uid: "java", title: "Java", directory: "BACKEND", pages: {}};

  const page1 = {uid: UUID(), title: "Map<,>", blocks: {}}

  const pageBlock11 = {uid: UUID(), lang: "html", data: ""}
  pageBlock11.data = `<h2>Interface Map</h2>
<p>Данный интерфейс также находится в составе JDK c версии 1.2 и предоставляет разработчику базовые методы для работы с данными вида «ключ — значение». Также как и <code>Collection</code>, он был дополнен дженериками в версии Java 1.5 и в версии Java 8 появились дополнительные методы для работы с лямбдами
</p>
<p>
<code>V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)</code>
  
Требуется вычислить счетчики вхождения всех слов в данный текст. Если слово уже есть в отображении, обновить его счетчик, иначе поместить слово в отображение со счетчиком 1:
</p>`;

  const pageBlock12 = {uid: UUID(), lang: "java", data: ""}
  pageBlock12.data = `public Map<String, Integer> fullWordCounts(String passage) { 
    Map<String, Integer> wordCounts = new HashMap<>();
    //Не учитываем регистра букв и знаков препинания:
    String testString = passage.toLowerCase().replaceAll("\\W"," ");
    Arrays.stream(testString.split("\\s+")).forEach(word ->
        wordCounts.merge(word, 1, Integer::sum));
    return wordCounts;
}`

  const pageBlock13 = {uid: UUID(), lang: "html", data: ""}
  pageBlock13.data = `<p>Метод merge принимает ключ и значение по умолчанию, которое будет вставлено, если ключа еще нет в отображении. Если же ключ есть, то merge применяет бинарный оператор (в данном случае метод <code>sum</code> класса <code>Integer</code>) для вычисления нового значения на основе старого.
</p>`;

  page1.blocks = [pageBlock11, pageBlock12, pageBlock13];

  const page2 = {uid: UUID(), title: "File", blocks: {}}

  const pageBlock21 = {uid: UUID(), lang: "html", data: ""}
  pageBlock21.data = `<p>В любой Unix-системе имеется файл <code>/usr/share/dict/words</code>, содержащий весь словарь
Вебстера (2-е из- дание), по одному слову на строку. Для чтения этого файла можно воспользоваться методом Files.lines, который порождает поток строк, содержащих слова.

Чтение файла словаря в отображение:
</p>`

  const pageBlock22 = {uid: UUID(), lang: "java", data: ""}
  pageBlock22.data = `System.out.println("Распределение числа слов по длинам:");
try (Stream<String> lines = Files.lines(dictionary)) {
    lines.filter(s -> s.length() > 20)
         .collect(Collectors.groupingBy(String::length, Collectors.counting()))
         .forEach((len, num) -> System.out.printf("%d: %d%n", len, num));
} catch (IOException e) { 
    e.printStackTrace();
}
//21: 82
//22: 41
//23: 17
//24: 5`
  page2.blocks = [pageBlock21, pageBlock22];

  doc.pages = [page1, page2];
  return doc;
}

export function generateJSDoc() {
  const doc = {uid: "js", title: "JavaScript", directory: "FRONTEND", pages:{}};

  const page1 = {uid: UUID(), title: "Promise", blocks: {}}

  const pageBlock11 = {uid: UUID(), lang: "html", data: ""}
  pageBlock11.data = `Функция <code>getPeople</code> возвращает новый промис, который делает запрос к API. Если промис выполнен успешно, данные загрузятся. Если он не выполнен, возникнет ошибка:
`;

  const pageBlock12 = {uid: UUID(), lang: "js", data: ""}
  pageBlock12.data = `const getPeople = count =>
  new Promise((resolves, rejects) => {
  const api = \`https://de.mo/?nat=US&results=\${count}\`;
  const request = new XMLHttpRequest();
  request.open("GET", api);
  request.onload = () =>
    request.status === 200 
      ? resolves(JSON.parse(request.response).results)
      : reject(Error(request.statusText));
  request.onerror = err => rejects(err);
  request.send();
});`

  page1.blocks = [pageBlock11, pageBlock12];

  const page2 = {uid: UUID(), title: "Closure", blocks: {}}

  const pageBlock21 = {uid: UUID(), lang: "html", data: ""}
  pageBlock21.data = `<h2>Замыкания</h2>`

  const pageBlock22 = {uid: UUID(), lang: "js", data: ""}
  pageBlock22.data = `const tahoe = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: function(delay = 1000) {
    setTimeout(() => { 
        // this в стрелочной функции ссылается
        // на глобальный контекст (window)
        console.log(this.mountains.join(", "));
    }, delay); }
};
tahoe.print();
//Output: Freel, Rose, Tallac, Rubicon, Silver`
  page2.blocks = [pageBlock21, pageBlock22];


  const page3 = {uid: UUID(), title: "Symbol.iterator", blocks: {}}

  const pageBlock31 = {uid: UUID(), lang: "html", data: ""}
  pageBlock31.data = `Array, Map, Set are iterable objects. Все iterable объекты должны иметь функцию <code>[Symbol.iterator]()</code>, которая возвращает текущее вычисленное значение внутри объекта, например <code>{value: 10}</code>, а по окнчанию цикла указывать на завершение объектом <code>{done: true}</code>.
</br>
Create Range class as iterable object:
`

  const pageBlock32 = {uid: UUID(), lang: "js", data: ""}
  pageBlock32.data = `class Range {
  constructor(from, to) {
    this.from = from
    this.to = to
  }
  
  toString() { return \`Range(\${this.from}, \${this.to})\` }
  
  [Symbol.iterator]() {
    let value = Math.ceil(this.from)
    const last = this.to;
    return {
      next() {
        return (value < last) ? { value: value++ } : { done: true }
      }
    }
  }
}`

  page3.blocks = [pageBlock31, pageBlock32];

  doc.pages = [page1, page2, page3];
  return doc;
}