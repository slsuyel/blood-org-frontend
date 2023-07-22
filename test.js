
/* 
Founder Name
Company Name*
Company name
Short note about your startup/project/ideas*
Founder Email*
Founder Email
Location*

Register Here
Founder Phone*

Business Category*

Founder Gender*

Website Url
Employee Number
Formation of Company
Company Video link
Company Website Link
Employee Number

Company video link
Facebook link
Youtube link
Linkedin link
Company Facebook link
Company Youtube link
Company Linkedin link
Attachment file
Choose file No file chosen
 */
Students/1/
<template>
                <nav aria-label="Page navigation example" v-if="totalitems>per_page">
            <ul class="pagination  justify-content-end">
                <!-- <li class="page-item"><a class="page-link" href="#">Previous</a></li> -->
                <li class="page-item" v-for="(pag,index) in Totalpageprops" :key="'p'+index" v-if="index==0 && pag.url">
                    <router-link class="page-link" :to="{name:Routenameprops,params:Routeparamsprops,query:{page:pag.url.split('?')[1].split('=')[1]}}" v-html="pag.label"></router-link>
                </li>
                <li class="page-item" v-for="(pag,index) in Totalpageprops" :key="'i'+index" :class="{active:pag.active,'disabled':pag.label=='...'}"  v-if="index!=0 && pag.label!='Next &raquo;'">
                    <router-link class="page-link" :to="{name:Routenameprops,params:Routeparamsprops,query:{page:pag.label}}" v-html="pag.label"></router-link>
                </li>
                <li class="page-item" v-for="(pag,index) in Totalpageprops" :key="'l'+index" v-if="pag.label=='Next &raquo;'  && pag.url">
                    <router-link class="page-link" :to="{name:Routenameprops,params:Routeparamsprops,query:{page:pag.url.split('?')[1].split('=')[1]}}" v-html="pag.label"></router-link>
                </li>
                <!-- <li class="page-item"><a class="page-link" href="#">Next</a></li> -->
            </ul>
        </nav>
</template>


export default {
    props: {
        per_page: {
            type: Number,
            dmeefault: 20
        },
        totalitems: {
            type: Number,
            dmeefault: 0
        },
        Totalpageprops: {
            type: Array,
            dmeefault: []
        },
        Routenameprops: {
            type: String,
            dmeefault: ''
        },
        Routeparamsprops: {
            type: Object,
            dmeefault: {}
        }

    },
}
