#!/usr/bin/env python3
"""Entrypoint: copy the rendered entry.png to the output directory.

Runs with no network and only the standard library. The harness sets
MAKEFUN_OUTPUT_DIR; the default is /output. The copy is byte-exact, so
repeated runs write identical bytes.
"""
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))


def main() -> int:
    out_dir = os.environ.get("MAKEFUN_OUTPUT_DIR", "/output")
    os.makedirs(out_dir, exist_ok=True)
    shutil.copyfile(
        os.path.join(HERE, "entry.png"),
        os.path.join(out_dir, "entry.png"),
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
