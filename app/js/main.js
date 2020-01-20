"use strict";

$(function() {
	/*______ Переключение тарифов вместе с табами ______*/

	let switcher = UIkit.switcher(".js__map-switcher");

	function setHandlerToggle(tabActive) {
		let parentElementList = $(this)
			.parents("ul")
			.find("li");
		let idx = parentElementList.index($(this));

		$.each($(".js__toggle-tab"), function(i, el) {
			$(el)
				.find("li")
				.removeClass("checked");
			$(el)
				.find("li")
				.eq(idx)
				.addClass("checked");
		});

		if (tabActive) {
			switcher.show(idx);
		}
	}

	$(".js__map-switcher").on("click", "li", setHandlerToggle);

	$(".js__toggle-tab").on("click", "li", function() {
		let toggleTab = setHandlerToggle.bind(this);
		toggleTab(true);

		$(this)
			.siblings("li")
			.removeClass("checked");
		$(this).addClass("checked");
	});

	/*______ Открытие мобильного подменю ______*/

	$(".js__menu-sublist-toggle").on("click", function(e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent("a"),
			siblingsList = blockParent.siblings(".menu-sublist");

		if (blockParent.hasClass("open")) {
			siblingsList.stop().slideUp("350", function() {
				blockParent.removeClass("open");
			});
		} else {
			siblingsList.stop().slideDown("350", function() {
				blockParent.addClass("open");
			});
		}

		self.toggleClass("open");
	});

	/*______ Открытие мобильного подменю в футере ______*/

	$('[data-role="toggle-list"] i').on("click", function(e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent('[data-role="toggle-list"]'),
			siblingsList = blockParent.parent().find(".footer__list");

		self.toggleClass("open");
		siblingsList.stop(true, true).slideToggle("350");
	});

	/*______ Маска формы ______*/

	$(".js__input-phone")
		.mask("+7 999 999-99-99", { clearIfNotMatch: true })
		.focus(function(e) {
			if (!$(this).val()) {
				$(this).val("+7 ");
			}
		});
});
