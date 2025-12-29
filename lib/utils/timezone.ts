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

    // We store "Wall Time" (IST) in the DB as a naive timestamp.
    // The driver (node-postgres) fetches this and treats it as a UTC Date object.
    // e.g., '2026-01-12 16:00:00' becomes '2026-01-12T16:00:00.000Z'
    // To get the "real" UTC absolute time, we subtract 5.5 hours from this Z date.
    const istOffset = 5.5 * 60 * 60 * 1000;
    return new Date(d.getTime() - istOffset);
}

/**
 * Gets today's date string in YYYY-MM-DD format (IST).
 */
export function getTodayIST(): string {
    const now = new Date();
    // Move to IST by adding 5.5 hours to the UTC timestamp
    const istTime = now.getTime() + (5.5 * 60 * 60 * 1000);
    const istDate = new Date(istTime);
    // Use UTC methods to extract the parts that now represent IST values
    const year = istDate.getUTCFullYear();
    const month = String(istDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(istDate.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Extract date string (YYYY-MM-DD)
 */
export function getISTDateString(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    // Shift the UTC time forward by 5.5 hours so UTC components match IST
    const istDate = new Date(d.getTime() + (5.5 * 60 * 60 * 1000));
    const year = istDate.getUTCFullYear();
    const month = String(istDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(istDate.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Extract time string (HH:mm)
 */
export function getISTTimeString(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    // Shift the UTC time forward by 5.5 hours so UTC components match IST
    const istDate = new Date(d.getTime() + (5.5 * 60 * 60 * 1000));
    const hours = String(istDate.getUTCHours()).padStart(2, '0');
    const minutes = String(istDate.getUTCMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}
