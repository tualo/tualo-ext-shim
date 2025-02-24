Ext.define('Tualo.panel.Panel', {
    extend: 'Ext.panel.Panel',
    requires: [
    ],

    config: {
        dockedItems: null
    },

    applyDockedItems: function (dockedItems) {
        if (Ext.isModern) {
            console.log('Tualo.panel.Panel', 'applyDockedItems', dockedItems, this.items);
            let l = [];
            dockedItems.forEach((item) => {
                item.docked = item.dock;
                l.push(Ext.create(item));
            });

            setTimeout(() => {
                console.log(this);
                this.items.add(l);
            }, 5000);
        }

        return dockedItems;
    },


})