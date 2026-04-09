export default function DatePickerModule() {
    let tomorrow = new Date(new Date().valueOf() + 1000 * 3600 * 24);
    let tomorrow_after = new Date(new Date().valueOf() + 2000 * 3600 * 24);
    let today = new Date();
    const dateTimePicker = document.querySelectorAll('.dateTime')
    if (dateTimePicker) {
        dateTimePicker.forEach(item => {
            const openTimePickerInput = item.querySelector(".dateTimeInput");
            const openTimePickerText = item.querySelector(".dateTimeText");
            const textabs = item.parentElement.parentElement.querySelector(".text-abs");
            const openTimeItem = item.querySelectorAll(".dateTimeItem");
            const dataMin = item.getAttribute('data-min')
            const dataType = item.getAttribute('data-type')
            const dataFormatValue = item.getAttribute('data-format-value')
            const dataFormatView = item.getAttribute('data-format-view')

            let minDay = today;
            let type = true;
            let formatValue = "DD/MM/YYYY";
            let formatView = "DD/MM/YYYY";
            let isShowYear = true;

            // -----------
            if (dataFormatValue) {
                formatValue = dataFormatValue
            }
            if (dataFormatView) {
                formatView = dataFormatView
            }
            if (dataType == "single") {
                type = true
            } else
                if (dataType == "double") {
                    type = false
                } else {
                    type = true
                }
            if (dataMin != "" && dataMin) {
                if (dataMin == "tomorrow") {
                    minDay = tomorrow
                } else if (dataMin == "tomorrow_after") {
                    minDay = tomorrow_after;
                } else {
                    minDay = dataMin
                }
            } else {
                minDay = today;
            }

            $(openTimeItem).daterangepicker({
                // minDate: minDay,
                autoApply: true,
                autoUpdateInput: true,
                timePicker: false,
                alwaysShowCalendars: true,
                singleDatePicker: type,
                showDropdowns: isShowYear,
                startDate: moment().startOf('hour'),
                endDate: moment().startOf('hour').add(32, 'hour'),
                locale: {
                    format: formatValue,
                    separator: " - "
                }
            });
            $(openTimeItem).on("apply.daterangepicker", function (ev, picker) {
                if (type) {
                    openTimePickerText.classList.add("disable")
                    if (textabs) {
                        textabs.parentElement.classList.add("active")
                    }
                    openTimePickerInput.value = picker.startDate.format(formatValue);
                    openTimePickerInput.setAttribute(
                        "data-time",
                        picker.startDate.format(formatValue)
                    );
                    openTimePickerInput.setAttribute("value", picker.startDate.format(formatValue));
                    $(openTimePickerText).html(picker.startDate.format(formatView));
                    // checkValue();
                } else {
                    openTimePickerText.classList.add("disable")
                    if (textabs) {
                        textabs.parentElement.classList.add("active")
                    }
                    // $(`input[name="arrivaldate"]`).attr('value', `${picker.startDate.format(formatValue)}`)
                    // $(`input[name="departuredate"]`).attr('value', `${picker.endDate.format(formatValue)}`)
                    $(openTimePickerText).html(`${picker.startDate.format(formatView)}-${picker.endDate.format(formatView)}`);
                    openTimePickerInput.setAttribute(
                        "data-time",
                        `${picker.startDate.format(formatView)} - ${picker.endDate.format(formatView)}`
                    );
                    // checkValue();
                }

            });
            // checkValue();

        })

        const getIp = document.querySelector('.account-reser-ip');
        const getCa = document.querySelector('.daterangepicker');
        if (getCa && getIp) {
            const ipWidth = getIp.offsetWidth;
            console.log(ipWidth)
            getCa.style.width = ipWidth + 'px'
        }

    }


    const dateTimePicker2 = document.querySelectorAll('.dateTime2')
    if (dateTimePicker2) {
        dateTimePicker2.forEach(item => {
            const openTimePickerInput = item.querySelector(".dateTimeInput2");
            const openTimePickerText = item.querySelector(".dateTimeText2");
            const textabs = item.parentElement.parentElement.querySelector(".text-abs");
            const openTimeItem = item.querySelectorAll(".dateTimeItem2");
            const dataMin = item.getAttribute('data-min')
            const dataType = item.getAttribute('data-type')
            const dataFormatValue = item.getAttribute('data-format-value')
            const dataFormatView = item.getAttribute('data-format-view')

            let minDay = today;
            let type = true;
            let formatValue = "DD/MM/YYYY";
            let formatView = "DD/MM/YYYY";
            let isShowYear = false;

            // -----------
            if (dataFormatValue) {
                formatValue = dataFormatValue
            }
            if (dataFormatView) {
                formatView = dataFormatView
            }
            if (dataType == "single") {
                type = true
            } else
                if (dataType == "double") {
                    type = false
                } else {
                    type = true
                }
            if (dataMin != "" && dataMin) {
                if (dataMin == "tomorrow") {
                    minDay = tomorrow
                } else if (dataMin == "tomorrow_after") {
                    minDay = tomorrow_after;
                } else {
                    minDay = dataMin
                }
            } else {
                minDay = today;
            }

            $(openTimeItem).daterangepicker({
                minDate: minDay,
                autoApply: true,
                autoUpdateInput: true,
                timePicker: false,
                alwaysShowCalendars: true,
                singleDatePicker: type,
                showDropdowns: isShowYear,
                startDate: moment().startOf('hour'),
                endDate: moment().startOf('hour').add(32, 'hour'),
                locale: {
                    format: formatValue,
                    separator: " - "
                }
            });
            $(openTimeItem).on("apply.daterangepicker", function (ev, picker) {
                if (type) {
                    openTimePickerText.classList.add("disable")
                    if (textabs) {
                        textabs.parentElement.classList.add("active")
                    }
                    openTimePickerInput.value = picker.startDate.format(formatValue);
                    openTimePickerInput.setAttribute(
                        "data-time",
                        picker.startDate.format(formatValue)
                    );
                    $(openTimePickerText).html(picker.startDate.format(formatView));

                    // xuli

                    // checkValue();
                } else {
                    openTimePickerText.classList.add("disable")
                    if (textabs) {
                        textabs.parentElement.classList.add("active")
                    }
                    // $(`input[name="arrivaldate"]`).attr('value', `${picker.startDate.format(formatValue)}`)
                    // $(`input[name="departuredate"]`).attr('value', `${picker.endDate.format(formatValue)}`)
                    $(openTimePickerText).html(`${picker.startDate.format(formatView)}-${picker.endDate.format(formatView)}`);
                    openTimePickerInput.setAttribute(
                        "data-time",
                        `${picker.startDate.format(formatView)} - ${picker.endDate.format(formatView)}`
                    );
                    // checkValue();
                }

                // 
                if (document.querySelector(".dateTimeItem2").classList.contains("dateFrom")) {
                    const tod = new Date(picker.startDate.format("YYYY-MM-DD"))
                    const tom = new Date(tod.valueOf() + 1000 * 3600 * 24)
                    console.log(tod)
                    console.log(tom)

                    $('.dateTo').daterangepicker({
                        minDate: tom,
                        autoApply: true,
                        autoUpdateInput: true,
                        timePicker: false,
                        alwaysShowCalendars: true,
                        singleDatePicker: type,
                        showDropdowns: isShowYear,
                        startDate: moment().startOf('hour'),
                        endDate: moment().startOf('hour').add(32, 'hour'),
                        locale: {
                            format: formatValue,
                            separator: " - "
                        }
                    });

                    $(".dateTo").on("apply.daterangepicker", function (ev, picker) {
                        console.log('cc')
                        document.querySelector(".dateTo .dateTimeText2").classList.add("disable")
                        if (document.querySelector(".text-abs.second")) {
                            document.querySelector(".text-abs.second").parentElement.classList.add("active")
                        }
                        document.querySelector(".dateTo .dateTimeInput2").value = picker.startDate.format(formatValue);
                        document.querySelector(".dateTo .dateTimeInput2").setAttribute(
                            "data-time",
                            picker.startDate.format(formatValue)
                        );
                        $(".dateTo .dateTimeText2").html(picker.startDate.format(formatView));
                    })
                    
                    document.querySelector(".dateTo").closest(".dateTime2").classList.remove('disable')
                }
                

            });
            // checkValue();

        })

        const getIp = document.querySelector('.account-reser-ip');
        const getCa = document.querySelector('.daterangepicker');
        if (getCa && getIp) {
            const ipWidth = getIp.offsetWidth;
            console.log(ipWidth)
            getCa.style.width = ipWidth + 'px'
        }

    }

}