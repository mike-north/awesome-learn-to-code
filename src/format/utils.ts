const MD_HEADER_PREFIXES = [null, '#', '##', '###', '####', '#####', '######'];

export const mdHeader = (text: string, level: number) => `${MD_HEADER_PREFIXES[level]} ${text}`;
