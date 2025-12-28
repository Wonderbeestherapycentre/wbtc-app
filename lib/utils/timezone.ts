/**
 * Timezone Utilities for IST (Indian Standard Time)
 * 
 * All dates in the application are stored and displayed in IST timezone.
 * We use "Wall Time" storage: 10:30 AM IST is stored as 10:30 in the DB.
 * The DB driver may attempt to shift this time when fetching; these utilities normalize it.
 */

/**
 * Parse a date and time string to a Date object suitable for Wall Time storage.
 * @param dateStr - Date string "YYYY-MM-DD"
 * @param timeStr - Time string "HH:mm"
 * @returns Date object in UTC which matches the Wall Time values
 */
export function parseISTDateTime(dateStr: string, timeStr: string): Date {
    const [year, month, day] = dateStr.split('-').map(Number);
    const [hours, minutes] = timeStr.split(':').map(Number);
    // Store exactly these values in the DB by using Date.UTC
    return new Date(Date.UTC(year, month - 1, day, hours, minutes));
}

/**
 * Format a Date object to an ISO string
 */
export function formatToISTString(date: Date): string {
    return date.toISOString();
}

/**
 * Get current date/time
 */
export function getCurrentISTDate(): Date {
    return new Date();
}

/**
 * Normalizes a date fetched from the database.
 * 
 * We store "Wall Time" (IST) in the DB.
 * The driver (node-postgres) may correctly returned it as a date object,
 * but its internal representation (UTC vs Local) can vary depending on
 * environment variables or driver settings.
 * 
 * This function extracts the hour/minute values that match the intended "Wall Time".
 */
export function convertUTCToIST(date: Date | string | null | undefined): Date {
    if (!date) return new Date();
    const d = typeof date === 'string' ? new Date(date) : date;

    // We want the numbers that were stored in the DB.
    // In most server environments (Neon/Next.js), DB timestamps are fetched as UTC.
    // However, some configurations fetch them as Local.

    // HEURISTIC: If the hour is shifted by exactly 5:30 relative to the expected IST,
    // we need to normalize. But we don't know the "expected" time here.

    // STABLE SOLUTION: Since we now store sessions using strings 'YYYY-MM-DD HH:mm:ss'
    // without TZ, the driver usually treats these as UTC points if no other info is given.
    // We will extract UTC components which is the most common behavior for Neon.
    return new Date(
        d.getUTCFullYear(),
        d.getUTCMonth(),
        d.getUTCDate(),
        d.getUTCHours(),
        d.getUTCMinutes(),
        d.getUTCSeconds()
    );
}

/**
 * Gets today's date string in YYYY-MM-DD format (IST).
 */
export function getTodayIST(): string {
    const now = new Date();
    // In IST, we might be a different day than UTC. 
    // We add 5.5 hours to UTC to get IST time.
    const istTime = now.getTime() + (5.5 * 60 * 60 * 1000);
    const istDate = new Date(istTime);
    return istDate.toISOString().split('T')[0];
}

/**
 * Extract date string (YYYY-MM-DD)
 */
export function getISTDateString(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Extract time string (HH:mm)
 */
export function getISTTimeString(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}
