var app = new Vue({
    el: '#app',
    data: {
        searchText: null,
        text: "békanyál béka békanyál gyékény pikáns legpikánsabb kalap kabát pék pók pókháló hálóing bika baka borda, bordal borda2 boróka megy meggyes 1.25 12. 3.145 boka b2 b46 bOka Boxa xxx dohány és dolmány. soci@netacademia.net, alma%@sexybabes.com soci12@alma.korte.neta.com _h1_alma_/xxx_ és _h2_korte_/h2_  _h1_gg_/h1_ _p__/p_ 12 2345 2 1A111 Exponenciális számok: 3e8, 4e+4, 5e-8, 45.6e-5, .34e-6 De a diszkópatkány pék 2022.01.22 2022-01-22 /winnt/system32/drivers/etc/lmhosts.sam"
    },
    watch: {
        // searchText() {
        //     // this.textMarked()
        // }
    },
    methods: {
        textMarked() {
            let text = this.text;
            let regex = null
            try {
                regex =  new RegExp(this.searchText, "g"); //g: mindet, i: kis-nagybetű
            } catch (error) {
                return text;
            }
            if (this.searchText) {
                try {
                    text = text.replace(regex, (match) => {
                        return `<span class="higlight">${match}</span>`
                    })
                } catch (error) {
                    return text;
                }
            }
            return text;
        },
        regexClick(regex){
            this.searchText = regex;
        }
    },
    computed: {
        getMatchList(){
            let matchList = [];
            let regex = null
            try {
                regex = new RegExp(this.searchText, "g"); //g: mindet, i: kis-nagybetű
            } catch (error) {
                return [];
            }
            if (this.searchText) {
                try {
                    matchList = this.text.match(regex);
                } catch (error) {
                    return []
                }
                if (matchList) {
                    matchList = matchList.map(match => {
                        return `<b>]</b>${match}<b>[</b>`;
                    })
                }
            }
            return matchList;
        },
        getRegex(){
            if (this.searchText) {
                try {
                    return new RegExp(this.searchText, "g");
                } catch (error) {
                    return "Szabálytalan";
                }
            }else{
                return "";
            }
        }
    }
})