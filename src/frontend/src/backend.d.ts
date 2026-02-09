import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface ScamReport {
    id: bigint;
    title: string;
    authorId: Principal;
    description: string;
    scamType: ScamType;
    dateReported: Time;
    lossAmount?: bigint;
}
export interface UserProfile {
    name: string;
}
export enum ScamType {
    other = "other",
    fakeTechSupport = "fakeTechSupport",
    ransomware = "ransomware",
    investment = "investment",
    phishing = "phishing",
    identityTheft = "identityTheft",
    shopping = "shopping",
    romance = "romance"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createScamReport(scamType: ScamType, title: string, desc: string, lossAmount: bigint | null): Promise<bigint>;
    getAllReports(): Promise<Array<ScamReport>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getReportsByType(scamType: ScamType): Promise<Array<ScamReport>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
}
