  function generateDomElements(){
    var createLiTags = function (item){
        let ul = document.getElementById("myList");
        let txtnode = document.createTextNode(item.name);
        let li = document.createElement('li');
        let a = document.createElement('a');
        let href = document.createAttribute('href');
        let dataAttr = document.createAttribute('data-show');
        let target = document.createAttribute('target');
        let dataCategory = document.createAttribute('data-category');
        dataAttr.value = item.id;
        dataCategory.value = item.category;
        href.value = item.url;
        target.value = '_blank';
        a.appendChild(txtnode);
        a.setAttributeNode(href);
        a.setAttributeNode(target);
        li.appendChild(a);
        li.setAttributeNode(dataAttr);
        li.setAttributeNode(dataCategory);
        ul.appendChild(li);
    }

    var createButtonTags = function (item){
        let buttonSection = document.getElementById("category_buttons");
        let txtnode = document.createTextNode(item);
        let button = document.createElement('Button');
        let dataId = document.createAttribute('id');
        dataId.value = item;
        button.appendChild(txtnode);
        button.setAttributeNode(dataId);
        buttonSection.appendChild(button);
    }

    return {
        createLiTags : createLiTags,
        createButtonTags : createButtonTags
    }
}

export default generateDomElements