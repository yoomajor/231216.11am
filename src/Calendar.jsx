import { useEffect, useState } from "react";
import dayjs from "dayjs";
import locale from "dayjs/locale/ko";
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import isTodayPlugin from "dayjs/plugin/isToday";

const Calendar = (props) => {
	const now = dayjs(props.expired).locale({
		...locale,
	});

	dayjs.extend(weekdayPlugin);
	dayjs.extend(objectPlugin);
	dayjs.extend(isTodayPlugin);

	const [currentMonth, setCurrentMonth] = useState(now);
	const [arrayOfDays, setArrayOfDays] = useState([]);

	const renderDays = () => {
		const dateFormat = "dddd";
		const days = [];

		for (let i = 0; i < 7; i++) {
			const letter = now.weekday(i).format(dateFormat)
			days.push(
				<div className="day" key={i} data-day={i}>
					{ letter.substring(0, 1) }
				</div>
			);
		}
		return <div className="header"><div className="days">{days}</div></div>;
	};

	const getAllDays = () => {
		let currentDate = currentMonth.startOf("month").weekday(0);
		const nextMonth = currentMonth.add(1, "month").month();

		let allDates = [];
		let weekDates = [];

		let weekCounter = 1;

		while (currentDate.weekday(0).toObject().months !== nextMonth) {
			const formated = formateDateObject(currentDate);

			weekDates.push(formated);

			if (weekCounter === 7) {
				allDates.push({ dates: weekDates });
				weekDates = [];
				weekCounter = 0;
			}

			weekCounter++;
			currentDate = currentDate.add(1, "day");
		}

		setArrayOfDays(allDates);
	};

	useEffect(() => {
		getAllDays();
	}, [currentMonth]);

	const renderCells = () => {
		const rows = [];
		let days = [];

		arrayOfDays.forEach((week, index) => {
			week.dates.forEach((d, i) => {
				days.push(
					<div
						className={`day ${
							!d.isCurrentMonth ? "disabled" : d.isCurrentDay ? "selected" : ""
						}`}
						key={i}
						data-day={i}
					>
						<span className="number">{d.day}</span>
					</div>
				);
			});
			rows.push(
				<div className="days" key={index}>
					{days}
				</div>
			);
			days = [];
		});

		return <div className="body">{rows}</div>;
	};

	const formateDateObject = date => {
		const clonedObject = { ...date.toObject() };

		const formatedObject = {
			day: clonedObject.date,
			month: clonedObject.months + 1,
			year: clonedObject.years,
			isCurrentMonth: clonedObject.months === 11,
			isCurrentDay: clonedObject.date === 16,
		};

		return formatedObject;
	};

	return (
		<div className="calendar">
			<div className="month">{now.year()} . {now.month() + 1}</div>
			{renderDays()}
			{renderCells()}
		</div>
	);
};

export default Calendar;