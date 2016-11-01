<template id="page_nav">
    <select id="page_nav_list">
        <option selected disabled>相册页</option>
        {{each pages}}
        <option value=${$value.page_num}> 第${$value.page_num}页</option>
        {{/each}}
    </select>
</template>


export default temp1;