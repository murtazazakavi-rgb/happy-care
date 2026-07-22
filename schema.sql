-- Database Schema for Happy Care – Istefada Ilmiyah
-- Paste this script into the Neon SQL Editor or Supabase SQL Editor.

CREATE TABLE IF NOT EXISTS "meta" (
  "id" SERIAL PRIMARY KEY,
  "k" TEXT UNIQUE,
  "v" TEXT
);

CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "itsId" TEXT UNIQUE,
  "name" TEXT,
  "role" TEXT,
  "salt" TEXT,
  "hash" TEXT,
  "active" BOOLEAN DEFAULT TRUE,
  "parentId" INTEGER,
  "staffId" INTEGER,
  "groupId" INTEGER,
  "needsPasswordChange" BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS "programs" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "year" TEXT
);

CREATE TABLE IF NOT EXISTS "phases" (
  "id" SERIAL PRIMARY KEY,
  "programId" INTEGER,
  "name" TEXT,
  "startDate" TEXT,
  "endDate" TEXT,
  "startTime" TEXT,
  "endTime" TEXT,
  "groupCount" INTEGER,
  "maxPerGroup" INTEGER
);

CREATE TABLE IF NOT EXISTS "operatingDates" (
  "id" SERIAL PRIMARY KEY,
  "phaseId" INTEGER,
  "date" TEXT
);

CREATE TABLE IF NOT EXISTS "groups" (
  "id" SERIAL PRIMARY KEY,
  "phaseId" INTEGER,
  "name" TEXT,
  "code" TEXT,
  "ageCategory" TEXT,
  "capacity" INTEGER,
  "room" TEXT,
  "status" TEXT,
  "timetableTemplateId" INTEGER,
  "customTimetable" JSONB
);

CREATE TABLE IF NOT EXISTS "children" (
  "id" SERIAL PRIMARY KEY,
  "itsId" TEXT UNIQUE,
  "name" TEXT,
  "dob" TEXT,
  "phaseId" INTEGER,
  "active" BOOLEAN DEFAULT TRUE,
  "medicalAlert" TEXT,
  "assistNote" TEXT,
  "photo" TEXT
);

CREATE TABLE IF NOT EXISTS "parents" (
  "id" SERIAL PRIMARY KEY,
  "itsId" TEXT UNIQUE,
  "name" TEXT,
  "relationship" TEXT,
  "mobile" TEXT,
  "altMobile" TEXT,
  "email" TEXT,
  "authorisedPickup" BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS "childParent" (
  "id" SERIAL PRIMARY KEY,
  "childId" INTEGER,
  "parentId" INTEGER,
  "relationship" TEXT
);

CREATE TABLE IF NOT EXISTS "staff" (
  "id" SERIAL PRIMARY KEY,
  "itsId" TEXT,
  "name" TEXT,
  "role" TEXT,
  "mobile" TEXT,
  "altMobile" TEXT,
  "phaseId" INTEGER,
  "visibleToParents" BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS "groupStaff" (
  "id" SERIAL PRIMARY KEY,
  "groupId" INTEGER,
  "slot" TEXT,
  "staffId" INTEGER
);

CREATE TABLE IF NOT EXISTS "childGroup" (
  "id" SERIAL PRIMARY KEY,
  "childId" INTEGER,
  "groupId" INTEGER,
  "phaseId" INTEGER,
  "active" BOOLEAN DEFAULT TRUE,
  "assignedAt" TEXT
);

CREATE TABLE IF NOT EXISTS "timetableTemplates" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "ageCategory" TEXT,
  "items" JSONB
);

CREATE TABLE IF NOT EXISTS "childAttendance" (
  "id" SERIAL PRIMARY KEY,
  "childId" INTEGER,
  "phaseId" INTEGER,
  "date" TEXT,
  "groupId" INTEGER,
  "present" BOOLEAN,
  "checkIn" TEXT,
  "checkOut" TEXT,
  "recordedBy" TEXT
);

CREATE TABLE IF NOT EXISTS "staffAttendance" (
  "id" SERIAL PRIMARY KEY,
  "staffId" INTEGER,
  "phaseId" INTEGER,
  "date" TEXT,
  "groupId" INTEGER,
  "role" TEXT,
  "status" TEXT,
  "replacementStaffId" TEXT
);

CREATE TABLE IF NOT EXISTS "queries" (
  "id" SERIAL PRIMARY KEY,
  "parentId" INTEGER,
  "childId" INTEGER,
  "phaseId" INTEGER,
  "groupId" INTEGER,
  "category" TEXT,
  "subject" TEXT,
  "message" TEXT,
  "status" TEXT,
  "createdAt" TEXT,
  "assignedStaffId" INTEGER
);

CREATE TABLE IF NOT EXISTS "queryResponses" (
  "id" SERIAL PRIMARY KEY,
  "queryId" INTEGER,
  "byName" TEXT,
  "message" TEXT,
  "createdAt" TEXT
);

CREATE TABLE IF NOT EXISTS "issues" (
  "id" SERIAL PRIMARY KEY,
  "phaseId" INTEGER,
  "type" TEXT,
  "status" TEXT,
  "note" TEXT,
  "createdAt" TEXT
);
