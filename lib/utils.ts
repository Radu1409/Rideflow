import { Ride } from "@/types/type";

export const sortRides = (rides: Ride[]): Ride[] => {
  const result = rides.sort((a, b) => {
    const dateA = new Date(`${a.created_at}T${a.ride_time}`);
    const dateB = new Date(`${b.created_at}T${b.ride_time}`);
    return dateB.getTime() - dateA.getTime();
  });

  return result.reverse();
};

export const formatArrivalTime = (totalMinutes: number) => {
  const days = Math.floor(totalMinutes / 1440); // 1 zi = 1440 minute
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = Math.round(totalMinutes % 60);

  let formattedTime = "";

  if (days > 0) {
    formattedTime += `${days} day${days !== 1 ? "s" : ""}`;
  }

  if (hours > 0) {
    if (formattedTime) formattedTime += ", ";
    formattedTime += `${hours} hour${hours !== 1 ? "s" : ""}`;
  }

  if (minutes > 0) {
    if (formattedTime) formattedTime += " ";
    formattedTime += `${minutes} min${minutes !== 1 ? "s" : ""}`;
  }

  return formattedTime || "0 mins";
};

export function formatTime(minutes: number): string {
  const formattedMinutes = +minutes?.toFixed(0) || 0;

  if (formattedMinutes < 60) {
    return `${minutes} min`;
  } else {
    const hours = Math.floor(formattedMinutes / 60);
    const remainingMinutes = formattedMinutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day < 10 ? "0" + day : day} ${month} ${year}`;
}
