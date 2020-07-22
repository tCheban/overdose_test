define([
    'jquery',
    'underscore',
    'jquery/ui',
    'Magento_Ui/js/modal/modal',
    'domReady!'
], function ($, _) {

    $.widget('overdose.newsletterpopup', $.mage.modal, {
        _create: function () {
            this._super();
            setTimeout(function () {
                this.openModal();
            }.bind(this),10000)
        }
    });

    return $.overdose.newsletterpopup;
});

